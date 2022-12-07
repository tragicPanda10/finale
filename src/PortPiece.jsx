import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


export default function PortPiece(props) {
    return(
        <div className='cardstock shadow m-3'>
            <Card style={{width: '30vw'}}>
                <a href={props.website}>
                    <Card.Img as={Image} variant='top' src={process.env.PUBLIC_URL + props.source} />
                </a>
            </Card>
        </div>
    );

}