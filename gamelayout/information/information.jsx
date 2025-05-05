import { InformationLayout } from "./InformationLayout";

export const Information = ({isDraw, isGameEnded, currentPlayer}) => {
    let message;

    if(isDraw) {
        message = 'Ничья';
    } else if(isGameEnded) {
        message = `'Победил' ${currentPlayer}`
    }
    else {
        message = `'Ходит'${currentPlayer}`
    }

    return <InformationLayout message={message}/>    
}
