import React, { Component } from 'react';

var placeholder = document.createElement('li');
placeholder.className = 'placeholder';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged);
  }

  dragEnd(e) {
    this.dragged.parentNode.removeChild(placeholder);

    const data = this.state.colors;
    const from = Number(this.dragged.dataset.id);
    const to = Number(this.over.dataset.id);

    if (from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({ colors: data });
  }

  dragOver(e) {
    e.preventDefault();
    if (e.target.className === 'placeholder') return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);
  }

  render() {
    var listItems = this.state.colors.map((item, i) => {
      return (
        <li
          className='list-group-item'
          data-id={i}
          key={i}
          draggable='true'
          onDragEnd={this.dragEnd.bind(this)}
          onDragStart={this.dragStart.bind(this)}>
          {item}
        </li>
      );
    });

    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-sm-12'>
            <ul className='list-group' onDragOver={this.dragOver.bind(this)}>
              {listItems}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default List;
