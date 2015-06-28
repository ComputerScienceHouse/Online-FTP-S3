'use strict';
import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class Toolbar extends React.Component {
    render() {
        return (
            <ButtonToolbar>
                    <ButtonGroup>
                        <Button bsStyle="primary">
                            <Glyphicon glyph="arrow-up" />&nbsp;
                            Upload
                        </Button>
                        <Button bsStyle="primary">
                            <Glyphicon glyph="arrow-down" />&nbsp;
                            Download
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>Verschieben</Button>
                        <Button>Löschen</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>Erstellen</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button><Glyphicon glyph="refresh" /></Button>
                    </ButtonGroup>
            </ButtonToolbar>
        )
    }
}

/**
<div className="toolbar btn-toolbar">
    <div className="btn-group">
        <button className="btn-toolbar-upload btn btn-primary">
            <span className="glyphicon glyphicon-arrow-up"></span>&nbsp;
            Upload
        </button>
        <button className="btn-toolbar-download btn btn-primary">
            <span className="glyphicon glyphicon-arrow-down"></span>&nbsp;
            Download
        </button>
    </div>
    <div className="btn-group">
        <button className="btn-toolbar-move btn btn-default">Verschieben</button>
        <button className="btn-toolbar-delete btn btn-default">Löschen</button>
    </div>
    <div className="btn-group">
        <button className="btn-toolbar-create btn btn-default">Erstellen</button>
    </div>
    <div className="btn-group">
        <button className="btn-toolbar-refresh btn btn-default">
            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
        </button>
    </div>
</div>
*/

export default Toolbar;
