import React from 'react';
import { Button, Box, Panel, Control, Input, Icon } from 'reactbulma';

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
                    Тестовый шаблон 1
                </Panel.Block>
                <Panel.Block>
                    Тестовый шаблон 2
                </Panel.Block>
            </Panel>
        )
    }
}
export default TemplateList;