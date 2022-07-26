import { StyledItem } from '../theme';
import { Link, useParams } from 'react-router-dom';
import {FavoriteOutlined} from '@mui/icons-material';

export const Item = (props) => {
    const params = useParams();
    const {shopby, viewby} = params;
    return(
        <div>
            <StyledItem key={props._id}>
                <Link to={`/products/${props.category}/${shopby}/${viewby}/${props._id}/${props.itemname}`} >
                <div className="item" >
                    <div className="cover">
                        <img src={props.product_image} alt={props.itemname} width="100%" height="100%"/>
                        <div className="favorite">
                            <FavoriteOutlined />
                        </div>
                    </div>
                    <div className="lower-info">
                        <span>{props.itemname}</span><br />
                        <span>{props.fit}</span>
                        <br />
                        <span>{`PHP${props.price}`}</span>
                    </div>
                </div>
                </Link>
            </StyledItem>
        </div>
        
    )
}