import FrontEnd from '../templates/FrontEnd/index';
import ProductInformation from '../organisms/ProductInformation';
import ProductStatus from '../organisms/ProductStatus';
import * as S from './styles'

function Main() {
  return(
    <FrontEnd>
      <S.Container>
        <ProductInformation/>
        <ProductStatus/>
      </S.Container>
    </FrontEnd>
  )
}

export default Main;
