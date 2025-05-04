import './fieldlayout.css'

export const Fieldlayout = ({field, onCellClick}) => {
    return (
        <div className="game-board">
        {field.map((cell, index) => 
        (<button 
        key={index} 
        className="cell" 
        onClick = {() => onCellClick(index)}
        disabled={cell !== '' || false}>
            {cell} 
         </button>
        ))}
        </div>
    );
    
}