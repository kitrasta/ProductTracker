export type Category = 'dairy' | 'fruits' | 'meat' | 'bakery' | 'other'

export const categoryLabels: Record<Category, string> = {
  dairy: 'Молочные',
  fruits: 'Фрукты',
  meat: 'Мясо',
  bakery: 'Выпечка',
  other: 'Другое',
}