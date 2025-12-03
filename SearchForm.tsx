import React, { useState, useEffect } from 'react';
import { Search, Map } from 'lucide-react';
import { THAI_PROVINCES, PROVINCE_DISTRICTS } from '../constants';
import { SearchFilters } from '../types';

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [availableDistricts, setAvailableDistricts] = useState<string[]>([]);

  useEffect(() => {
    if (province && PROVINCE_DISTRICTS[province]) {
      setAvailableDistricts(PROVINCE_DISTRICTS[province].sort((a, b) => a.localeCompare(b, 'th')));
    } else {
      setAvailableDistricts([]);
    }
    setDistrict('');
  }, [province]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!province) {
      alert("กรุณาเลือกจังหวัดก่อนทำการค้นหา");
      return;
    }
    onSearch({ province, district });
  };

  return (
    <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-thai-accent rounded-full -mr-10 -mt-10 opacity-50 z-0 pointer-events-none"></div>
      
      <div className="relative z-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Map className="h-5 w-5 text-thai-primary" />
          ค้นหาแหล่งเรียนรู้ท้องถิ่น
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* Province */}
          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
              จังหวัด <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border py-2.5 px-3 shadow-sm focus:ring-thai-primary focus:border-thai-primary sm:text-sm transition-colors cursor-pointer hover:bg-white"
              >
                <option value="">-- เลือกจังหวัด --</option>
                {THAI_PROVINCES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* District */}
          <div>
            <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
              อำเภอ/เขต
            </label>
            <div className="relative">
              <select
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                disabled={!province}
                className={`mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-3 shadow-sm focus:ring-thai-primary focus:border-thai-primary sm:text-sm transition-all ${
                  !province ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-50 cursor-pointer hover:bg-white'
                }`}
              >
                <option value="">-- เลือกอำเภอ/เขต (ทั้งหมด) --</option>
                {availableDistricts.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex md:justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={`inline-flex items-center justify-center w-full md:w-auto px-6 py-2.5 rounded-lg text-white text-sm font-medium shadow-md transition-all transform active:scale-95 ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-thai-primary hover:bg-emerald-700 hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                   <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  กำลังค้นหา...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  ค้นหา
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
