import React from 'react';

interface Props {
  userAddress: string|null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
}

interface State {
}

const defaultState: State = {
};

export default class CollectionStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isSaleOpen(): boolean
  {
    return !this.props.isPaused;
  }

  render() {
    return (
      <>
        <div className="collection-status">
          <div className="user-address">
            <span className="label">Your wallet address:</span>
            <span className="address">{this.props.userAddress}</span>
          </div>
          
          <div className="supply">
            <span className="label">Minted verses</span>
            {this.props.totalSupply}/{this.props.maxSupply}
          </div>

          <div className="current-sale">
            <span className="label">Status</span>
            {this.isSaleOpen() ? 'Open' : 'Closed'}
          </div>
        </div>
      </>
    );
  }
}
