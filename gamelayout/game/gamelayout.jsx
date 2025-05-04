import './Gamelayout.css'

export const GameLayout = ({Information, field, onReset}) => {
    return (
        <div className="game-container">
            {Information}
            {field}
            <div className="controls">
                <button className='reset-button' onClick={onReset}>
                Начать заново
                </button>
            </div>
        </div>
    );
};