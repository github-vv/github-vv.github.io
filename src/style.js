import {css} from 'lit-element';

export const style = css`
  :host {
    font-family: Arial, serif;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
  }

  .popup {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    padding: 15px;
    background: #fff;
    border-radius: 5px;
    color: #000;
    text-align: center;
  }

  .day, .hour {
    padding: 15px;
    margin: 2.5px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    background: green;
    color: white;
  }

  .day {
    display: inline-block;
    min-width: 105px;
  }

  .hour {
    display: block;
  }

  .active {
    background: deepskyblue;
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .info {
    margin-bottom: 10px;
  }

  .free, .crowded, .full {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .free, .green {
    background: green;
  }

  .crowded, .orange {
    background: orange;
  }

  .full, .red {
    background: red;
  }
`;
