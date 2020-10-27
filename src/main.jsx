import React from 'react';
import { Box, Container, Tabs } from 'reactbulma';
import BlockElement from './Block/BlockElement.jsx';
import TemplateForm from './Template/TemplateForm.jsx';;
import Image from './Block/BlockTypes/Image.jsx';
import Text from './Block/BlockTypes/Text.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blockList: [],
            displayTemplateList: true
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

    createNewTemplate() {
        this.setState({ displayTemplateList: false });
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
                        <li><a>Протоколы</a></li>
                        <li className="is-active"><a>Шаблоны</a></li>
                        <li><a>Блоки</a></li>
                    </ul>
                </Tabs>
                <TemplateForm
                    visible={this.state.displayTemplateList}
                    addImage={() => this.handleAddImage()}
                    addText={() => this.handleAddText()}
                    createNewTemplate={() => this.createNewTemplate()}
                />

                {listItems}


            </Container>
        )
    }
}
export default Main;