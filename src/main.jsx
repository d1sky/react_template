import React from 'react';
import { Container, Tabs } from 'reactbulma';
import BlockElement from './block/blockElement.jsx';
import BlockMenu from './template/blockMenu.jsx';

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
        blockList.push({ id: blockList.sizq + 1, name: "Изображение", type: "image", link: "", description: "" })
        this.setState({ blockList })
        console.log(this.state.blockList);
    };

    handleAddText() {
        console.log("click");
        var blockList = this.state.blockList.slice()
        blockList.push({ id: blockList.sizq + 1, name: "Текстовой блок", type: "text", description: "" })
        this.setState({ blockList })
        console.log(this.state.blockList);
    };

    render() {
        const blockList = this.state.blockList
        const listItems = blockList.map((block, index) =>
            <BlockElement block={block} key={index} />
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
                <BlockMenu
                    addImage={() => this.handleAddImage()}
                    addText={() => this.handleAddText()}
                />
                {listItems}
            </Container>
        )
    }
}
export default Main;