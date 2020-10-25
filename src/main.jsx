import React from 'react';
import Block from './block.jsx';
import { Card, Content, Container, Button, Section, Tabs } from 'reactbulma';
import BlockMenu from './blockMenu.jsx';
import { } from 'reactbulma'

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
                <Tabs>
                    <ul>
                        <li><a>Отчёт</a></li>
                        <li className="is-active"><a>Шаблон</a></li>
                        <li><a>Блок</a></li>
                    </ul>
                </Tabs>
                <BlockMenu addImage={() => this.handleAddImage()} />
                {listItems}
            </Container>
        )
    }
}
export default Main;