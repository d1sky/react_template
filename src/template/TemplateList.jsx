import React from 'react';
import { Box, Panel, Control, Input, Icon } from 'reactbulma';
import Button from 'reactbulma/lib/components/Button/Button';

class TemplateList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <Panel>
                <Panel.Heading>
                    Список шаблонов
                </Panel.Heading>
                <Panel.Block>
                    <Control hasIconsLeft>
                        <Input small type="text" placeholder="Поиск" />
                        <Icon small left>
                            <i className="fa fa-search" />
                        </Icon>
                    </Control>
                </Panel.Block>
                <Panel.Block active>
                <Button><Icon small><i className="fa fa-pencil-square-o"/></Icon></Button> Тестовый шаблон 1
                </Panel.Block>
                <Panel.Block>
                <Button><Icon small><i className="fa fa-pencil-square-o"/></Icon></Button>  Тестовый шаблон 2
                </Panel.Block>
            </Panel>
        )
    }
}
export default TemplateList;