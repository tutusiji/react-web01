// 组件相关类型定义

import { ReactNode, CSSProperties } from 'react'
import type { MenuProps, TableProps, FormProps } from 'antd'

// 基础组件 Props
export interface BaseProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

// 布局组件类型
export namespace Layout {
  // Header 组件 Props
  export interface HeaderProps extends BaseProps {
    logo?: ReactNode
    title?: string
    actions?: ReactNode
    showUserInfo?: boolean
    onMenuClick?: (key: string) => void
  }

  // Sidebar 组件 Props
  export interface SidebarProps extends BaseProps {
    collapsed?: boolean
    onCollapse?: (collapsed: boolean) => void
    menuItems?: MenuProps['items']
    selectedKeys?: string[]
    openKeys?: string[]
    onMenuClick?: MenuProps['onClick']
  }

  // Footer 组件 Props
  export interface FooterProps extends BaseProps {
    copyright?: string
    links?: {
      title: string
      href: string
      external?: boolean
    }[]
  }
}

// 表格组件类型
export namespace Table {
  // 表格列配置
  export interface Column<T = any> {
    key: string
    title: string
    dataIndex?: keyof T | string[]
    width?: number | string
    minWidth?: number
    maxWidth?: number
    align?: 'left' | 'center' | 'right'
    fixed?: 'left' | 'right'
    ellipsis?: boolean
    sorter?: boolean | ((a: T, b: T) => number)
    sortOrder?: 'ascend' | 'descend' | null
    filters?: { text: string; value: any }[]
    filteredValue?: any[]
    filterDropdown?: ReactNode
    render?: (value: any, record: T, index: number) => ReactNode
    onCell?: (record: T, index: number) => any
    onHeaderCell?: (column: Column<T>) => any
  }

  // 表格 Props
  export interface Props<T = any> extends Omit<TableProps<T>, 'columns'> {
    columns: Column<T>[]
    data?: T[]
    loading?: boolean
    error?: string | null
    pagination?: {
      current: number
      pageSize: number
      total: number
      showSizeChanger?: boolean
      showQuickJumper?: boolean
      showTotal?: (total: number, range: [number, number]) => ReactNode
    }
    selection?: {
      type: 'checkbox' | 'radio'
      selectedRowKeys?: React.Key[]
      onChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void
      getCheckboxProps?: (record: T) => any
    }
    actions?: {
      refresh?: () => void
      export?: () => void
      import?: () => void
      create?: () => void
      batchDelete?: (keys: React.Key[]) => void
    }
  }
}

// 表单组件类型
export namespace Form {
  // 表单字段类型
  export type FieldType = 
    | 'input'
    | 'textarea'
    | 'password'
    | 'number'
    | 'select'
    | 'multiSelect'
    | 'radio'
    | 'checkbox'
    | 'switch'
    | 'date'
    | 'dateRange'
    | 'time'
    | 'upload'
    | 'editor'
    | 'custom'

  // 表单字段配置
  export interface Field {
    name: string | string[]
    label: string
    type: FieldType
    required?: boolean
    disabled?: boolean
    hidden?: boolean
    placeholder?: string
    tooltip?: string
    rules?: any[]
    dependencies?: string[]
    options?: { label: string; value: any; disabled?: boolean }[]
    props?: any
    render?: (form: any) => ReactNode
    span?: number
    offset?: number
  }

  // 表单 Props
  export interface Props extends Omit<FormProps, 'onFinish'> {
    fields: Field[]
    initialValues?: any
    loading?: boolean
    readonly?: boolean
    columns?: 1 | 2 | 3 | 4
    onFinish?: (values: any) => void | Promise<void>
    onValuesChange?: (changedValues: any, allValues: any) => void
    actions?: {
      submit?: {
        text?: string
        loading?: boolean
        disabled?: boolean
      }
      reset?: {
        text?: string
        disabled?: boolean
      }
      cancel?: {
        text?: string
        onClick?: () => void
      }
    }
  }
}

// 搜索组件类型
export namespace Search {
  // 搜索字段配置
  export interface Field {
    name: string
    label: string
    type: 'input' | 'select' | 'date' | 'dateRange'
    placeholder?: string
    options?: { label: string; value: any }[]
    props?: any
  }

  // 搜索 Props
  export interface Props extends BaseProps {
    fields: Field[]
    initialValues?: any
    loading?: boolean
    onSearch?: (values: any) => void
    onReset?: () => void
    collapsed?: boolean
    onCollapse?: (collapsed: boolean) => void
  }
}

// 图标组件类型
export namespace Icon {
  export interface Props extends BaseProps {
    name: string
    size?: number | string
    color?: string
    spin?: boolean
    rotate?: number
    onClick?: () => void
  }
}

// 上传组件类型
export namespace Upload {
  export interface File {
    uid: string
    name: string
    status: 'uploading' | 'done' | 'error' | 'removed'
    url?: string
    thumbUrl?: string
    size?: number
    type?: string
    response?: any
    error?: any
    percent?: number
  }

  export interface Props extends BaseProps {
    value?: File[]
    onChange?: (files: File[]) => void
    action?: string
    accept?: string
    multiple?: boolean
    maxCount?: number
    maxSize?: number
    listType?: 'text' | 'picture' | 'picture-card'
    showUploadList?: boolean
    disabled?: boolean
    beforeUpload?: (file: File) => boolean | Promise<boolean>
    onPreview?: (file: File) => void
    onRemove?: (file: File) => boolean | Promise<boolean>
  }
}

// 模态框组件类型
export namespace Modal {
  export interface Props {
    open?: boolean
    title?: ReactNode
    content?: ReactNode
    width?: number | string
    centered?: boolean
    closable?: boolean
    maskClosable?: boolean
    keyboard?: boolean
    destroyOnClose?: boolean
    loading?: boolean
    onOk?: () => void | Promise<void>
    onCancel?: () => void
    okText?: string
    cancelText?: string
    okButtonProps?: any
    cancelButtonProps?: any
    footer?: ReactNode | null
  }
}

// 抽屉组件类型
export namespace Drawer {
  export interface Props {
    open?: boolean
    title?: ReactNode
    content?: ReactNode
    width?: number | string
    height?: number | string
    placement?: 'top' | 'right' | 'bottom' | 'left'
    closable?: boolean
    maskClosable?: boolean
    keyboard?: boolean
    destroyOnClose?: boolean
    onClose?: () => void
    extra?: ReactNode
    footer?: ReactNode
  }
}

// 图表组件类型
export namespace Chart {
  export interface DataPoint {
    x: string | number
    y: number
    [key: string]: any
  }

  export interface Props extends BaseProps {
    data: DataPoint[]
    loading?: boolean
    error?: string | null
    height?: number
    config?: any
    onDataPointClick?: (point: DataPoint) => void
  }

  export interface LineChartProps extends Props {
    xField: string
    yField: string
    seriesField?: string
    smooth?: boolean
    point?: boolean
  }

  export interface BarChartProps extends Props {
    xField: string
    yField: string
    seriesField?: string
    isStack?: boolean
    isPercent?: boolean
  }

  export interface PieChartProps extends Props {
    angleField: string
    colorField: string
    radius?: number
    innerRadius?: number
  }
}

// 步骤条组件类型
export namespace Steps {
  export interface Step {
    title: string
    description?: string
    icon?: ReactNode
    status?: 'wait' | 'process' | 'finish' | 'error'
    disabled?: boolean
  }

  export interface Props extends BaseProps {
    steps: Step[]
    current?: number
    direction?: 'horizontal' | 'vertical'
    size?: 'default' | 'small'
    onChange?: (current: number) => void
  }
}

// 标签页组件类型
export namespace Tabs {
  export interface TabPane {
    key: string
    tab: ReactNode
    content: ReactNode
    disabled?: boolean
    closable?: boolean
    forceRender?: boolean
  }

  export interface Props extends BaseProps {
    panes: TabPane[]
    activeKey?: string
    defaultActiveKey?: string
    type?: 'line' | 'card' | 'editable-card'
    size?: 'large' | 'default' | 'small'
    tabPosition?: 'top' | 'right' | 'bottom' | 'left'
    onChange?: (activeKey: string) => void
    onEdit?: (targetKey: string, action: 'add' | 'remove') => void
  }
}