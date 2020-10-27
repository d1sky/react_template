import React from 'react';
import Image from './BlockTypes/Image.jsx';
import Text from './BlockTypes/Text.jsx';
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
        const block = this.props.block;
        return (
            <Box style={{padding: 0}}>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            {block.name}
                        </Card.Header.Title>
                        <Card.Header.Icon>
                            <Delete onClick={this.props.delete} />
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