import _ from "lodash";

export const returnPaginationRange = (props:PaginationProps) => {

    const totalPageNoInArray = 7 + props.siblings;    
    if (totalPageNoInArray >= props.totalPage){
        return _.range(1, props.totalPage+1);
    }

    const leftSiblingsIndex = Math.max(props.page - props.siblings, 1)
    const rightSiblingsIndex = Math.min(props.page + props.siblings, props.totalPage)
    const showLeftDots = leftSiblingsIndex > 2;
    const showRightDots = rightSiblingsIndex < props.totalPage -2

    if(!showLeftDots && showRightDots){
        const leftItemsCount = 3 + 2 * props.siblings;
        const leftRange = _.range(1, leftItemsCount+1);
        return [...leftRange, "...", props.totalPage];
    } else if(showLeftDots && !showRightDots) {
        const rightItemsCount = 3 + 2 * props.siblings;
        const rightRange = _.range(props.totalPage - rightItemsCount+1,props.totalPage+1);
        return [1, "...", ...rightRange];
    } else {
        const middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex +1);
        return [1, "...", ...middleRange, "...", props.totalPage];
    }
}