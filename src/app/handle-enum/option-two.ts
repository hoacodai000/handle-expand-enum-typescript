export enum STATUS {
  ACTIVE,
  AWAITING_REVIEW,
  CLOSED,
  COMPLETE,
  DRAFT,
  IN_PROCESS,
  IN_REVIEW,
  NOT_STARTED,
  PENDING_RESOLUTION,
  REJECTED
};

export const STATUS_LABLE = new Map<number, string>([
  [STATUS.ACTIVE, 'Active'],
  [STATUS.AWAITING_REVIEW, 'Awaiting Review'],
  [STATUS.CLOSED, 'Closed'],
  [STATUS.COMPLETE, 'Complete'],
  [STATUS.DRAFT, 'Draft'],
  [STATUS.IN_PROCESS, 'In Process'],
  [STATUS.IN_REVIEW, 'In Review'],
  [STATUS.NOT_STARTED, 'Not Started'],
  [STATUS.PENDING_RESOLUTION, 'Pending Resolution'],
  [STATUS.REJECTED, 'Rejected'],
]);