class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(
  0,
  '5BF8F85A1BD8B6C61248E110A1EE140BDB6F68F146A583C781F52BAEC3FA3322',
  '',
  'This is the GenesisBlock!',
  1526735534007
);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
