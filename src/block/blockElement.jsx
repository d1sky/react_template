import React from 'react';
import Image from './blockTypes/image.jsx';
import Text from './blockTypes/text.jsx';
import { Card, Delete, Content, Box } from 'reactbulma';


class BlockElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            block: {
                ...this.props.block,
                cmpnt: this.props.block.type == "text" ? <Text key={this.props.block.id} /> : <Image key={this.props.block.id} />
                }
            }
        }
    

    render() {
        const block = this.state.block;
        return (
            <Box style={{padding: 0}}>
                <Card key={block.index}>
                    <Card.Header>
                        <Card.Header.Title>
                            {block.name}
                        </Card.Header.Title>
                        <Card.Header.Icon>
                            <Delete />
                        </Card.Header.Icon>
                    </Card.Header>
                    <Card.Content>
                        <Content>
                            {block.cmpnt}
                        </Content>
                    </Card.Content>
                </Card>
            </Box>

        )
    }
}
export default BlockElement;