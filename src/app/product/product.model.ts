export interface IProductModel{
	ProductId: number
	Name  : string
	Price : number
	Description : string
	ProductCategoryId: number
	Category:string
}


export interface IProductCategoryModel{
	ProductCategoryId: number
	Name  : string
}