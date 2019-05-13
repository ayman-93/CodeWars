// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
// function PaginationHelper(collection, itemsPerPage) {

// }

// returns the number of items within the entire collection
// PaginationHelper.prototype.itemCount = function () {

// }

// returns the number of pages
// PaginationHelper.prototype.pageCount = function () {

// }

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
// PaginationHelper.prototype.pageItemCount = function (pageIndex) {

// }

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function (itemIndex) {

// }

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pages = Array(this.pageCount()).fill([]);
    this.pagesfill(this.pages);
  }

  pagesfill(pages) {
    let collection = this.collection.slice(0);
    for (let i in pages) {
      pages[i] = collection.splice(0, this.itemsPerPage);
    }
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    let n = this.collection.length / this.itemsPerPage;
    return Math.ceil(n);
  }

  pageItemCount(pageIndex) {
    if (pageIndex < this.pageCount()) return this.pages[pageIndex].length;
    else return -1;
  }

  pageIndex(itemIndex) {
    for (let page of this.pages) {
      if (page.includes(this.collection[itemIndex])) {
        return this.pages.indexOf(page);
      }
    }
    return -1;
  }
}

let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

console.log(helper.pageCount());
console.log(helper.itemCount());

console.log(helper.pages);
console.log(helper.pageItemCount(0));
console.log(helper.pageIndex(5));
