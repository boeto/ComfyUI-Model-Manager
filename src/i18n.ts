import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    model: 'Model',
    modelManager: 'Model Manager',
    openModelManager: 'Open Model Manager',
    searchModels: 'Search models',
    modelCopied: 'Model Copied',
    download: 'Download',
    downloadList: 'Download List',
    downloadTask: 'Download Task',
    createDownloadTask: 'Create Download Task',
    parseModelUrl: 'Parse Model URL',
    pleaseInputModelUrl: 'Input a URL from civitai.com or huggingface.co',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    deleteAsk: 'Confirm delete this {0}?',
    modelType: 'Model Type',
    default: 'Default',
    network: 'Network',
    local: 'Local',
    none: 'None',
    uploadFile: 'Upload File',
    tapToChange: 'Tap description to change content',
    sort: {
      name: 'Name',
      size: 'Largest',
      created: 'Latest created',
      modified: 'Latest modified',
    },
    info: {
      type: 'Model Type',
      fullname: 'File Name',
      sizeBytes: 'File Size',
      createdAt: 'Created At',
      updatedAt: 'Updated At',
    },
  },
  zh: {
    model: '模型',
    modelManager: '模型管理器',
    openModelManager: '打开模型管理器',
    searchModels: '搜索模型',
    modelCopied: '模型节点已拷贝',
    download: '下载',
    downloadList: '下载列表',
    downloadTask: '下载任务',
    createDownloadTask: '创建下载任务',
    parseModelUrl: '解析模型URL',
    pleaseInputModelUrl: '输入 civitai.com 或 huggingface.co 的 URL',
    cancel: '取消',
    save: '保存',
    delete: '删除',
    deleteAsk: '确定要删除此{0}？',
    modelType: '模型类型',
    default: '默认',
    network: '网络',
    local: '本地',
    none: '无',
    uploadFile: '上传文件',
    tapToChange: '点击描述可更改内容',
    sort: {
      name: '名称',
      size: '最大',
      created: '最新创建',
      modified: '最新修改',
    },
    info: {
      type: '类型',
      fullname: '文件名',
      sizeBytes: '文件大小',
      createdAt: '创建时间',
      updatedAt: '更新时间',
    },
  },
}

const getLocalLanguage = () => {
  const local =
    localStorage.getItem('Comfy.Settings.Comfy.Locale') ||
    navigator.language.split('-')[0] ||
    'en'

  return local.replace(/['"]/g, '')
}

export const i18n = createI18n({
  legacy: false,
  locale: getLocalLanguage(),
  fallbackLocale: 'en',
  messages,
})
