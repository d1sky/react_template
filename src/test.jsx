import React from 'react';
import Image from './image.jsx';
import { Card, Content, Container, Button } from 'reactbulma';

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blockList: []
        }
    }

    handleAddImage() {
        console.log("click");
        var blockList = this.state.blockList.slice()
        blockList.push({ type: "image", link: "", description: "" })
        this.setState({ blockList })
        console.log(this.state.blockList);
    };

    render() {
        const blockList = this.state.blockList
        const list = [1, 2, 3]
        const listItems = blockList.map((block, index) =>
            <Card key={index}>
                <Card.Header>
                    <Card.Header.Title>
                        {block.type}
                    </Card.Header.Title>
                    <Card.Header.Icon>
                        <i className="fa fa-angle-down"></i>
                    </Card.Header.Icon>
                </Card.Header>
                <Card.Content>
                    <Content>
                        <Image  />
                    </Content>
                </Card.Content>
            </Card>
        );

        return (
            <Container>
                <div>
                    <Button success onClick={() => this.handleAddImage()}>Изображение</Button>
                    {/* <Button success onClick={handleAddImage}>Текст</Button> */}
                    <div>{listItems}</div>
                </div>
            </Container>
        )
    }
}
export default Test;