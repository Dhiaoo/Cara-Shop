const cart = [];

const CartHandler = (state = cart, actions)=>{
    const product = actions.payload;
    switch (actions.type) {
        case "ADDITEM":
            const exist = state.find((x)=>x.id===product.id);
            if(exist){
                return state.map((x)=> x.id === product.id ? {...x, qty:x.qty+1}: x);
            }else{
                const product = state.payload;
                return [
                    ...state, 
                    {
                        ...product, 
                        qty:1
                    }
                ];
            }
            break;
            case "DELITEM":
                const exist1= state.find((x)=>x.id === product.id);
                if(exist1.qty === 1){
                    return state.filter((x)=> x.id !== product.id);
                }else{
                    return state.map((x)=>x.id === product.id ? {...x, qty : qty-1} : x);
                }
                break;
    
        default:
            return state;
            break;
    }
}

export default CartHandler;