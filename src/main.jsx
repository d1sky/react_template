import React from 'react';
import Block from './block.jsx';
import { Card, Content, Container, Button , Section} from 'reactbulma';
import BlockMenu from './blockMenu.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blockList: []
        }
    }

    handleAddImage() {
        console.log("click");
        var blockList = this.state.blockList.slice()
        blockList.push({ name: "Изображение", type: "image", link: "", description: "" })
        this.setState({ blockList })
        console.log(this.state.blockList);
    };

    render() {
        const blockList = this.state.blockList
        const listItems = blockList.map((block, index) =>
        <Section><Block block={block} key={index} /></Section>
        );

        return (
            <Container>

                <BlockMenu addImage={() => this.handleAddImage()} />
                {listItems}

            </Container>
        )
    }
}
export default Main;