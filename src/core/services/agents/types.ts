export interface ApiResponse {
  status: number;
  data: AgentResponse[];
}

interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface AgentResponse {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  releaseDate: string;
  characterTags: null | string[]; // Could be null or an array of strings
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: Role;
  recruitmentData: null; //  Could be a more complex type if it ever has data
  abilities: Ability[];
  voiceLine: null; // Could be a string | null if it exists
}

export interface Agent {
  name: string;
  image: string;
  uuid: string;
}
