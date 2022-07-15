export default {
  categorys: (state) => state.category.categorys,
  themeType: (state) => state.theme.themeType,
  /**
   * category选中项
   */
  currentCategory: (state) => state.app.currentCategory,
  /**
   * category选中项下标
   */
  currentCategoryIndex: (state, getters) =>
    getters.categorys.findIndex(
      (item) => item.id === getters.currentCategory.id
    ),
  historys: (state) => state.search.historys,
  searchText: (state) => state.app.searchText
}
