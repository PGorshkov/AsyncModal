export interface IModalOptions {
  closeClickOverlay?: boolean
}
export interface IPropsComponent {
	[k: string]: any
}
export interface IElementComponent {
	component: any,
	modalOptions: IModalOptions,
	props: IPropsComponent
}
export interface IComponentItem extends IElementComponent{
	resolve: (value?: any) => void,
	reject: (value?: any) => void
}
