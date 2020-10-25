import React from 'react';
import Image from './blocks/image.jsx';
import { Card, Content } from 'reactbulma';

class Block extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            block: this.props.block
        }
    }

    render() {
        const block = this.state.block;
        return (
            <Card key={block.index}>
            <Card.Header>
                <Card.Header.Title>
                    {block.name}
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
        )
    }
}
export default Block;