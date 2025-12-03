import React from 'react';
import ResourceCard from './ResourceCard';
import { LearningResource } from '../types';

interface ResourceListProps {
  resources: LearningResource[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
  return (
    <section>
       {/* Header with count */}
      <div className="flex items-center justify-between mb-6 animate-fade-in">
        <h3 className="text-lg font-semibold text-gray-700 border-l-4 border-thai-secondary pl-3">
          ผลการค้นหา: <span className="text-thai-primary font-bold text-xl">{resources.length}</span> รายการ
        </h3>
        <span className="hidden sm:inline-block text-xs text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">
          Local Learning Resources
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, index) => (
          <ResourceCard key={res.id} resource={res} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ResourceList;