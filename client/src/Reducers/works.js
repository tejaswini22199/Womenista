export default (works=[],action)=>{
switch(action.type){
    case 'FETCH_ALL':
        return action.payload;
    case 'CREATE':
        return [...works,action.payload];
    default:
        return works;
}
};