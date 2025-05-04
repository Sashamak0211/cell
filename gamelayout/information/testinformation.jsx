import {InformationLayout} from './informationLayout'

export const TestInformation = () => {
    return (
      <>
        <InformationLayout isDraw={true} isGameEnd={false} currentPlayer="X" />
        <InformationLayout isDraw={false} isGameEnd={true} currentPlayer="O" />
        <InformationLayout isDraw={false} isGameEnd={false} currentPlayer="X" />
      </>
    );
  };