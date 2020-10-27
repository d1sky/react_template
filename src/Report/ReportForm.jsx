import React from 'react';
import { Button, Box } from 'reactbulma';

class ReportForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Box>
                <Button  onClick={this.props.addText}>Создать новый отчёт</Button>
            </Box>
        )
    }
}
export default ReportForm;