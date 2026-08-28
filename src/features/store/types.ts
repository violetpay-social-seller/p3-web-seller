export type StoreStatus = "INACTIVE" | "ACTIVE" | "SUSPENDED" | "DELETED";
export type RepresentativeImageStatus = "ACTIVE" | "HIDDEN";

export type StoreInput = {
  name: string;
  profileAssetId?: string | null;
  description?: string | null;
  contact?: string | null;
  contactVisible: boolean;
  snsLinks?: string | null;
  businessHours?: string | null;
  pickupSettings?: string | null;
  address?: string | null;
};

export type Store = StoreInput & {
  id: string;
  ownerUserId: string;
  slug: string;
  settlementAccountStatus: string | null;
  settlementAccountRegisteredAt: string | null;
  status: StoreStatus;
  createdAt: string;
  updatedAt: string;
};

export type WeeklyPickupSetting = {
  dayOfWeek:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  startTime: string;
  endTime: string;
  dailyOrderCapacity: number;
  enabled: boolean;
};

export type StoreSettingsInput = {
  leadTimeMinutes: number;
  preOrderNotice?: string | null;
  cancellationCutoffDays: number;
  weeklyPickupSettings: WeeklyPickupSetting[];
  holidays: string[];
};

export type StoreSettings = StoreSettingsInput & { storeId: string };

export type StoreShareLink = { slug: string; url: string };

export type RepresentativeImage = {
  id: string;
  storeId: string;
  assetId: string;
  sortOrder: number;
  status: RepresentativeImageStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateRepresentativeImageInput = Pick<
  RepresentativeImage,
  "assetId" | "sortOrder"
>;
export type UpdateRepresentativeImageInput = Pick<
  RepresentativeImage,
  "sortOrder" | "status"
>;
