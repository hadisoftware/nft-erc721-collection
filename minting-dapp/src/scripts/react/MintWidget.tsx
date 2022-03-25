import { utils, BigNumber } from 'ethers';
import React from 'react';
import NetworkConfigInterface from '../../../../smart-contract/lib/NetworkConfigInterface';

interface Props {
  networkConfig: NetworkConfigInterface;
  maxSupply: number;
  totalSupply: number;
  tokenPrice: BigNumber;
  maxMintAmountPerTx: number;
  isPaused: boolean;
  mintTokens(mintAmount: number): Promise<void>;
}

interface State {
  mintAmount: number;
  isLoading: boolean;
}

const defaultState: State = {
  mintAmount: 1,
  isLoading: false
};

export default class MintWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private canMint(): boolean {
    return !this.props.isPaused;
  }

  private incrementMintAmount(): void {
    this.setState({
      mintAmount: Math.min(this.props.maxMintAmountPerTx, this.state.mintAmount + 1),
    });
  }

  private decrementMintAmount(): void {
    this.setState({
      mintAmount: Math.max(1, this.state.mintAmount - 1),
    });
  }

  private async mint(): Promise<void> {
    if (!this.props.isPaused) {
      this.setState({ isLoading: true });
      await this.props.mintTokens(this.state.mintAmount)
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <>
        {this.canMint() ?
          <div className="mint-widget">
            <div className="preview">
              <img src="https://quranplus.app/wp-content/uploads/2022/03/preview-2.png" alt="Collection preview" />
            </div>

            <div className="price">
              <strong>Total price:</strong> {utils.formatEther(this.props.tokenPrice.mul(this.state.mintAmount))} {this.props.networkConfig.symbol}
            </div>

            <div className="controls">
              <button className="decrease" onClick={() => this.decrementMintAmount()} disabled={this.state.isLoading}>-</button>
              <span className="mint-amount">{this.state.mintAmount}</span>
              <button className="increase" onClick={() => this.incrementMintAmount()} disabled={this.state.isLoading}>+</button>
              <button className="primary" onClick={() => this.mint()} disabled={this.state.isLoading}>Mint</button>
            </div>
          </div>
          :
          <div className="cannot-mint">
            <span className="emoji">⏳</span>
            Please come back during the next sale!
          </div>
        }
      </>
    );
  }
}
