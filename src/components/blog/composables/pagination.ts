import { ref, type Ref } from 'vue';

const from: Ref<number>  = ref<number>(0);
const to: Ref<number>  = ref<number>(0);
const page: Ref<number>  = ref<number>(1);
const maxPage: Ref<number>  =  ref<number>(0);
const maxPerPage: Ref<number>  =  ref<number>(1);
const size: Ref<number>  =  ref<number>(0);

export const usePagination = () => {
  const setZise = (_zise: number) => {
    size.value  =  _zise;
    maxPage.value  =  Math.round(size.value / maxPerPage.value);
    if(to.value == 0) {
      to.value = maxPerPage.value;
    }
  };

  const init = (_maxPerPage: number, ) => {
    maxPerPage.value = _maxPerPage;
  }

  const move = (num: number): void => {
    maxPage.value  =  Math.round(size.value / maxPerPage.value);
    let _from: number = from.value + maxPerPage.value * num;
    let _to: number = to.value + maxPerPage.value * num;
    let _page: number = Math.round(_to / maxPerPage.value);

    _page = _page < 0 ? 1 : _page;
    _page = _page > maxPage.value
      ? maxPage.value
      : _page;

    if (
      _page < 0
      || _page > maxPage.value
    ) {
      return;
    }

    page.value = _page;
    from.value = _from;
    to.value = _to;
  };

  const isFirstPage = () => page.value === 1;
  const isLastPage = () => page.value === maxPage.value;

  return  {
    init,
    setZise,
    move,
    isFirstPage,
    isLastPage,
    page,
    from,
    to,
    maxPage,
  }
};
