import React from 'react';
import { Container, Tabs } from 'reactbulma';
import BlockElement from './block/blockElement.jsx';
import Template  from './Template/TemplateForm.jsx';
// import Template from './template/template.jsx';
import Image from './block/blockTypes/image.jsx';
import Text from './block/blockTypes/text.jsx';

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
        blockList.push({ id: blockList.length + 1, name: "Изображение", type: "image", link: "", description: "" })
        this.setState({ blockList })
        console.log(blockList);
    };

    handleAddText() {
        console.log("click");
        var blockList = this.state.blockList.slice()
        blockList.push({ id: blockList.length + 1, name: "Текстовой блок", type: "text", description: "" })
        this.setState({ blockList })
        console.log(blockList);
    };

    handleDeleteBlock(blockId) {
        console.log('handleDeleteBlock ' + blockId);
        var blockList = this.state.blockList.filter(block => block.id !== blockId);
        console.log(blockList);
        this.setState({ blockList })
    }

    render() {
        const listItems = this.state.blockList.map((block, index) =>
            <BlockElement
                block={{
                    ...block,
                    cmpnt: block.type == "text" ? <Text key={block.id} /> : <Image key={block.id} />
                }
                } key={index} delete={() => this.handleDeleteBlock(block.id)}
            />
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
                {listItems}
                <Template
                    addImage={() => this.handleAddImage()}
                    addText={() => this.handleAddText()}
                />
            </Container>
        )
    }
}
export default Main;