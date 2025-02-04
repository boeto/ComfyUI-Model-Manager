<template>
  <div
    class="group/card relative cursor-pointer select-none"
    :style="{ width: `${cardSize.width}px`, height: `${cardSize.height}px` }"
    v-tooltip.top="{ value: model.basename, disabled: showModelName }"
    @click.stop="openDetailDialog"
  >
    <div class="h-full overflow-hidden rounded-lg">
      <div class="h-full bg-gray-500 duration-300 group-hover/card:scale-110">
        <img class="h-full w-full object-cover" :src="preview" />
      </div>
    </div>

    <div
      data-draggable-overlay
      class="absolute left-0 top-0 h-full w-full"
      draggable="true"
      @dragend.stop="dragToAddModelNode"
    ></div>

    <div class="pointer-events-none absolute left-0 top-0 h-full w-full p-4">
      <div class="relative h-full w-full text-white">
        <div v-show="showModelName" class="absolute bottom-0 left-0">
          <div class="drop-shadow-[0px_2px_2px_rgba(0,0,0,0.75)]">
            <div
              :class="[
                'line-clamp-3 break-all font-bold',
                $lg('text-lg', 'text-2xl'),
              ]"
            >
              {{ model.basename }}
            </div>
          </div>
        </div>

        <div class="absolute left-0 top-0 w-full">
          <div class="flex flex-row items-start justify-between">
            <div
              v-show="showModelType"
              class="flex items-center rounded-full bg-black/30 px-3 py-2"
            >
              <div :class="['font-bold', $lg('text-xs')]">
                {{ model.type }}
              </div>
            </div>

            <div
              v-show="showToolButton"
              class="opacity-0 duration-300 group-hover/card:opacity-100"
            >
              <div class="flex flex-col gap-4 *:pointer-events-auto">
                <Button
                  icon="pi pi-plus"
                  severity="secondary"
                  rounded
                  @click.stop="addModelNode"
                ></Button>
                <Button
                  icon="pi pi-copy"
                  severity="secondary"
                  rounded
                  @click.stop="copyModelNode"
                ></Button>
                <Button
                  v-show="model.preview"
                  icon="pi pi-file-import"
                  severity="secondary"
                  rounded
                  @click.stop="loadPreviewWorkflow"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DialogModelDetail from 'components/DialogModelDetail.vue'
import { useConfig } from 'hooks/config'
import { useContainerQueries } from 'hooks/container'
import { useDialog } from 'hooks/dialog'
import { useModelNodeAction } from 'hooks/model'
import Button from 'primevue/button'
import { Model } from 'types/typings'
import { genModelKey } from 'utils/model'
import { computed } from 'vue'

interface Props {
  model: Model
}

const props = defineProps<Props>()

const { cardSize } = useConfig()

const dialog = useDialog()

const openDetailDialog = () => {
  const basename = props.model.fullname.split('/').pop()!
  const filename = basename.replace(props.model.extension, '')

  dialog.open({
    key: genModelKey(props.model),
    title: filename,
    content: DialogModelDetail,
    contentProps: { model: props.model },
  })
}

const preview = computed(() =>
  Array.isArray(props.model.preview)
    ? props.model.preview[0]
    : props.model.preview,
)

const showToolButton = computed(() => {
  return cardSize.value.width >= 180 && cardSize.value.height >= 240
})

const showModelName = computed(() => {
  return cardSize.value.width >= 160 && cardSize.value.height >= 120
})

const showModelType = computed(() => {
  return cardSize.value.width >= 120
})

const { addModelNode, dragToAddModelNode, copyModelNode, loadPreviewWorkflow } =
  useModelNodeAction(props.model)

const { $lg } = useContainerQueries()
</script>
