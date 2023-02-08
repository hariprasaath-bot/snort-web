export class Rule {

  
  private _sid!: BigInteger;
  public get sid(): BigInteger {
    return this._sid;
  }
  public set sid(value: BigInteger) {
    this._sid = value;
  }

  private _protocol!: string;
  public get protocol(): string {
    return this._protocol;
  }
  public set protocol(value: string) {
    this._protocol = value;
  }

  private _srcip!: string;
  public get srcip(): string {
    return this._srcip;
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  private _src_port!: string;
  public get src_port(): string {
    return this._src_port;
  }
  public set src_port(value: string) {
    this._src_port = value;
  }

  private _dst_ip!: string;
  public get dst_ip(): string {
    return this._dst_ip;
  }
  public set dst_ip(value: string) {
    this._dst_ip = value;
  }

  private _dst_port!: string;
  public get dst_port(): string {
    return this._dst_port;
  }
  public set dst_port(value: string) {
    this._dst_port = value;
  }

  private _message!: string;
  public get message(): string {
    return this._message;
  }
  public set message(value: string) {
    this._message = value;
  }

  private _num_pkts!: string;
  public get num_pkts(): string {
    return this._num_pkts;
  }
  public set num_pkts(value: string) {
    this._num_pkts = value;
  }

  private _user!: string;
  public get user(): string {
    return this._user;
  }
  public set user(value: string) {
    this._user = value;
  }
}
