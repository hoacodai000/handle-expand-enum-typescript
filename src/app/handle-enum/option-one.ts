export interface EnumIdentity { }

export class Status implements EnumIdentity {

  private static AllValues: { [name: string]: Status } = {};

  static readonly ACTIVE = new Status('ACTIVE', 'Active');
  static readonly AWAITING_REVIEW = new Status('AWAITING_REVIEW', 'Awaiting Review');
  static readonly CLOSED = new Status('CLOSED', 'Closed');
  static readonly COMPLETE = new Status('COMPLETE', 'Complete');
  static readonly DRAFT = new Status('DRAFT', 'Draft');
  static readonly IN_PROCESS = new Status('IN_PROCESS', 'In Process');
  static readonly IN_REVIEW = new Status('IN_REVIEW', 'In Review');
  static readonly NOT_STARTED = new Status('NOT_STARTED', 'Not Started');
  static readonly PENDING_RESOLUTION = new Status('PENDING_RESOLUTION', 'Pending Resolution');
  static readonly REJECTED = new Status('REJECTED', 'Rejected');

  private constructor(public readonly key: string, public readonly displayValue: string) {
    Status.AllValues[key] = this;
  }

  public static parseEnum(data: string): Status {
    return Status.AllValues[data];
  }

}