export interface LearningResource {
  id: string;
  name: string;
  province: string;
  district: string;
  description: string;
  subjects: string[];
  standards: string[];
  tags: string[];
  imageUrl?: string;
}

export interface SearchFilters {
  province: string;
  district: string;
}