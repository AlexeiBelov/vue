export const DB =  {
    open: ()=> {
        return indexedDB.open('db', 1);
    }
}
