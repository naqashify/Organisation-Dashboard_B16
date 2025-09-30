// Data from the provided JSON with corrections
const data = {
  batch_analysis: {
    b15_total: 43,
    b16_total: 44,
    both_batches: 9,
    b15_only: 34,
    b16_only: 35,
    total_unique_organizations: 80
  },
  organization_lists: {
    b15_organizations: ["Open Links Foundation", "Sampark", "FutureWorks", "4th Wheel Foundation", "TNS Foundation", "Lighthouse Community", "Manjhi", "Muheem", "Kotak Education Foundation", "Agastya International Foundation", "Tender Heart Org", "Convergence Foundation", "Anubhuti", "Dhwani Foundation", "CEGP", "LAHI", "Mystics Manzil", "Project Chirag", "United Way - Mumbai", "Haqdarshak", "Ant Org", "Antarang", "Akanksha", "Samanta Foundation", "ThinkTac", "Youth Dreamers Foundation", "Vidhyadhara", "Aveti Pvt. Learning Ltd.", "Youth for Social Development", "Udhyam Learning Foundation", "Indus Action", "Pratham", "Green Hub", "Tisser", "Lakshya Jeevan Jagriti", "Anudip Foundation", "Piramal Pharma Limited", "IPEL Project - Consultant (ECE Fellow)", "Vijayavahini Charitable Foundation (Supported by Tata Trusts)", "CHIRAG (Central Himalayan Rural Action Group)", "Arogya World - Program Manager - Healthy School Program", "Prayatna – NGO - Programme Officer", "Piramal Foundation"],
    b16_organizations: ["Piramal Pharma Limited", "Azim Premji Foundation", "Open Links Foundation", "Labhya", "Bharti Airtel Foundation", "Swades Foundation", "Room to Read", "iTeach Schools", "FWWB", "Sterlite EDIndia Foundation", "CHIRAG", "The Circle", "Water for People", "Reap Benefits", "Central Square Foundation", "Safe Hub", "ThinkTac", "Kotak Education Foundation", "Antarang Foundation", "LAHI", "Parisar Bhagini Vikas Sangha", "Indus Action", "Medha Foundation", "People's Forum", "Apnishala", "SOUL", "BAIF", "SankalpTaru Foundation", "Ritinjali", "Sattva", "Antara Foundation", "Piramal Foundation", "Sajhe Sapane", "SRI", "K.R Shroff Foundation", "Quality Council of India", "The Right Pitch", "Filo - Ed Tech", "iVolunteer", "i-Saksham", "IIT - IIT", "ILSS", "LIFE Lab (Learning is Fun & Experiential)", "Foundation for Ecological Security (FES)"],
    organizations_in_both_batches: ["Piramal Pharma Limited", "Open Links Foundation", "CHIRAG", "ThinkTac", "Kotak Education Foundation", "Antarang", "Indus Action", "Piramal Foundation", "LAHI"],
    b15_only_organizations: ["Sampark", "FutureWorks", "4th Wheel Foundation", "TNS Foundation", "Lighthouse Community", "Manjhi", "Muheem", "Agastya International Foundation", "Tender Heart Org", "Convergence Foundation", "Anubhuti", "Dhwani Foundation", "CEGP", "Mystics Manzil", "Project Chirag", "United Way - Mumbai", "Haqdarshak", "Ant Org", "Akanksha", "Samanta Foundation", "Youth Dreamers Foundation", "Vidhyadhara", "Aveti Pvt. Learning Ltd.", "Youth for Social Development", "Udhyam Learning Foundation", "Pratham", "Green Hub", "Tisser", "Lakshya Jeevan Jagriti", "Anudip Foundation", "IPEL Project - Consultant (ECE Fellow)", "Vijayavahini Charitable Foundation (Supported by Tata Trusts)", "Arogya World - Program Manager - Healthy School Program", "Prayatna – NGO - Programme Officer"],
    b16_only_organizations: ["Azim Premji Foundation", "Labhya", "Bharti Airtel Foundation", "Swades Foundation", "Room to Read", "iTeach Schools", "FWWB", "Sterlite EDIndia Foundation", "The Circle", "Water for People", "Reap Benefits", "Central Square Foundation", "Safe Hub", "Parisar Bhagini Vikas Sangha", "Medha Foundation", "People's Forum", "Apnishala", "SOUL", "BAIF", "SankalpTaru Foundation", "Ritinjali", "Sattva", "Antara Foundation", "Sajhe Sapane", "SRI", "K.R Shroff Foundation", "Quality Council of India", "The Right Pitch", "Filo - Ed Tech", "iVolunteer", "i-Saksham", "IIT - IIT", "ILSS", "LIFE Lab (Learning is Fun & Experiential)", "Foundation for Ecological Security (FES)"]
  },
  recruitment_performance: {
    "Piramal Pharma Limited": {"B15": 3, "B16": 4, "total": 7},
    "Open Links Foundation": {"B15": 5, "B16": 16, "total": 21},
    "Piramal Foundation": {"B15": 84, "B16": 13, "total": 97}
  },
  domain_analysis: {
    working_domains: {
      "Education": 22,
      "Consulting, Leadership & Others": 7,
      "Livelihood": 6,
      "Environment": 5,
      "Gender/Women Empowerment": 3,
      "Rural & Tribal Development": 3,
      "Health": 2
    },
    domain_focus_distribution: {
      single_domain_organizations: 23,
      multi_domain_organizations: 21,
      single_domain_percentage: 52.3,
      multi_domain_percentage: 47.7
    }
  },
  geographic_analysis: {
    state_wise_jd_coverage: {
      "Maharashtra (Mumbai, Pune etc)": 12,
      "Uttar Pradesh": 7,
      "Delhi": 7,
      "Karnataka, Telangana & Andhra Pradesh": 7,
      "Chattisgarh": 5,
      "Gujarat": 5,
      "Uttrakhand": 4,
      "Rajasthan": 3,
      "Kolkata, Assam, NE": 3,
      "Odisha": 3,
      "Multiple States": 3,
      "Madhya Pradesh": 2,
      "Haryana": 2,
      "Jharkhand": 2,
      "Himachal Pradesh": 2,
      "Punjab": 1,
      "Goa": 1
    }
  },
  unique_job_description_analysis: {
    unique_job_description_types: {
      "Operations Type": 56,
      "Alternate Roles Type": 19,
      "Center of Excellence (CoE) Type": 17,
      "Field Operations Type": 7,
      "Special Interest Group (SIG) Type": 4
    },
    job_level_distribution: {
      "Entry Level (Associate, Assistant, Coordinator)": 93,
      "Mid Level (Manager, Lead, Senior)": 10
    },
    salary_range_distribution: {
      "Between 4-6 LPA": 67,
      "Up to 4 LPA": 21,
      "6 LPA and above": 15
    },
    total_unique_job_descriptions: 103
  }
};

// Neon chart color palette
const neonColors = ['#00ffff', '#a855f7', '#22c55e', '#ff006e', '#00bcd4', '#8b5cf6', '#10b981', '#ff1493', '#32cd32', '#9370db'];

// Charts storage
const charts = {};

// Dark theme chart options with neon colors
const darkChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  plugins: {
    legend: {
      labels: {
        color: '#ffffff',
        font: {
          weight: 'bold'
        },
        usePointStyle: true,
        padding: 20
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      titleColor: '#00ffff',
      bodyColor: '#ffffff',
      borderColor: '#00ffff',
      borderWidth: 2,
      cornerRadius: 8,
      displayColors: true,
      padding: 12,
      titleFont: {
        weight: 'bold'
      },
      bodyFont: {
        weight: 'bold'
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#ffffff',
        font: {
          weight: 'bold'
        }
      },
      grid: {
        color: '#333333'
      }
    },
    y: {
      ticks: {
        color: '#ffffff',
        font: {
          weight: 'bold'
        }
      },
      grid: {
        color: '#333333'
      }
    }
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeMobileMenu();
  initializeFilters();
  initializeCharts();
  renderOrganizationsList();
  populateStateFilter();
});

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const dashboardNav = document.getElementById('dashboardNav');

  if (mobileMenuBtn && dashboardNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      dashboardNav.classList.toggle('mobile-open');
    });

    // Close mobile menu when clicking nav items
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        dashboardNav.classList.remove('mobile-open');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!dashboardNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        dashboardNav.classList.remove('mobile-open');
      }
    });
  }
}

// Navigation handling
function initializeNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.dashboard-section');

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetSection = tab.dataset.section;
      
      // Update active tab
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update active section
      sections.forEach(s => s.classList.remove('active'));
      document.getElementById(targetSection).classList.add('active');
    });
  });
}

// Initialize filters
function initializeFilters() {
  // Organization search
  const orgSearch = document.getElementById('orgSearch');
  if (orgSearch) {
    orgSearch.addEventListener('input', filterOrganizations);
  }

  // Batch filter
  const batchFilter = document.getElementById('batchFilter');
  if (batchFilter) {
    batchFilter.addEventListener('change', filterOrganizations);
  }

  // Domain filter
  const domainFilter = document.getElementById('domainFilter');
  if (domainFilter) {
    domainFilter.addEventListener('change', applyDomainFilter);
  }

  // State filter
  const stateFilter = document.getElementById('stateFilter');
  if (stateFilter) {
    stateFilter.addEventListener('change', applyStateFilter);
  }

  // Reset filters
  const resetFilters = document.getElementById('resetFilters');
  if (resetFilters) {
    resetFilters.addEventListener('click', resetAllFilters);
  }

  // Export data
  const exportData = document.getElementById('exportData');
  if (exportData) {
    exportData.addEventListener('click', exportDashboardData);
  }
}

// Initialize all charts with dark theme
function initializeCharts() {
  createBatchPieChart();
  createOverlapChart();
  createDomainBarChart();
  createDomainDonutChart();
  createStateChart();
  createOpportunityTypesChart();
  createJobLevelsChart();
  createSalaryChart();
  createRecruitmentChart();
}

// Create batch distribution pie chart
function createBatchPieChart() {
  const ctx = document.getElementById('batchPieChart');
  if (!ctx) return;

  charts.batchPie = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['B15 Only', 'B16 Only', 'Both Batches'],
      datasets: [{
        data: [data.batch_analysis.b15_only, data.batch_analysis.b16_only, data.batch_analysis.both_batches],
        backgroundColor: [neonColors[0], neonColors[1], neonColors[2]],
        borderWidth: 3,
        borderColor: '#000000',
        hoverBorderWidth: 5,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      ...darkChartOptions,
      plugins: {
        ...darkChartOptions.plugins,
        legend: {
          ...darkChartOptions.plugins.legend,
          position: 'bottom'
        },
        tooltip: {
          ...darkChartOptions.plugins.tooltip,
          callbacks: {
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${context.label}: ${context.parsed} organizations (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// Create overlap chart
function createOverlapChart() {
  const ctx = document.getElementById('overlapChart');
  if (!ctx) return;

  charts.overlap = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['B15 Only', 'B16 Only', 'Both Batches'],
      datasets: [{
        data: [data.batch_analysis.b15_only, data.batch_analysis.b16_only, data.batch_analysis.both_batches],
        backgroundColor: [neonColors[0], neonColors[1], neonColors[2]],
        borderWidth: 3,
        borderColor: '#000000',
        hoverBorderWidth: 5,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      ...darkChartOptions,
      cutout: '60%',
      plugins: {
        ...darkChartOptions.plugins,
        legend: {
          ...darkChartOptions.plugins.legend,
          position: 'bottom'
        },
        tooltip: {
          ...darkChartOptions.plugins.tooltip,
          callbacks: {
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${context.label}: ${context.parsed} organizations (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// Create domain bar chart
function createDomainBarChart() {
  const ctx = document.getElementById('domainBarChart');
  if (!ctx) return;

  const sortedDomains = Object.entries(data.domain_analysis.working_domains)
    .sort(([,a], [,b]) => b - a);

  charts.domainBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sortedDomains.map(([label]) => label),
      datasets: [{
        data: sortedDomains.map(([,value]) => value),
        backgroundColor: neonColors.slice(0, sortedDomains.length),
        borderWidth: 2,
        borderColor: '#000000',
        hoverBorderWidth: 3,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      ...darkChartOptions,
      plugins: {
        ...darkChartOptions.plugins,
        legend: {
          display: false
        },
        tooltip: {
          ...darkChartOptions.plugins.tooltip,
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.parsed.y} organizations`;
            }
          }
        }
      },
      scales: {
        ...darkChartOptions.scales,
        y: {
          ...darkChartOptions.scales.y,
          beginAtZero: true,
          ticks: {
            ...darkChartOptions.scales.y.ticks,
            stepSize: 1
          }
        },
        x: {
          ...darkChartOptions.scales.x,
          ticks: {
            ...darkChartOptions.scales.x.ticks,
            maxRotation: 45
          }
        }
      }
    }
  });
}

// Create domain donut chart
function createDomainDonutChart() {
  const ctx = document.getElementById('domainDonutChart');
  if (!ctx) return;

  charts.domainDonut = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Single Domain', 'Multi Domain'],
      datasets: [{
        data: [data.domain_analysis.domain_focus_distribution.single_domain_organizations, 
               data.domain_analysis.domain_focus_distribution.multi_domain_organizations],
        backgroundColor: [neonColors[1], neonColors[2]],
        borderWidth: 3,
        borderColor: '#000000',
        hoverBorderWidth: 5,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      ...darkChartOptions,
      cutout: '60%',
      plugins: {
        ...darkChartOptions.plugins,
        legend: {
          ...darkChartOptions.plugins.legend,
          position: 'bottom'
        },
        tooltip: {
          ...darkChartOptions.plugins.tooltip,
          callbacks: {
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${context.label}: ${context.parsed} organizations (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// Create state chart
function createStateChart() {
  const ctx = document.getElementById('stateChart');
  if (!ctx) return;

  const sortedStates = Object.entries(data.geographic_analysis.state_wise_jd_coverage)
    .sort(([,a], [,b]) => b - a);

  charts.state = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sortedStates.map(([label]) => label),
      datasets: [{
        data: sortedStates.map(([,value]) => value),
        backgroundColor: neonColors[0],
        borderWidth: 2,
        borderColor: '#000000',
        hoverBorderWidth: 3,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      ...darkChartOptions,
      indexAxis: 'y',
      plugins: {
        ...darkChartOptions.plugins,
        legend: {
          display: false
        },
        tooltip: {
          ...darkChartOptions.plugins.tooltip,
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.parsed.x} job descriptions`;
            }
          }
        }
      },
      scales: {
        x: {
          ...darkChartOptions.scales.x,
          beginAtZero: true,
          ticks: {
            ...darkChartOptions.scales.x.ticks,
            stepSize: 1
          }
        },
        y: {
          ...darkChartOptions.scales.y
        }
      }
    }
  });
}

// Create opportunity types chart
function createOpportunityTypesChart() {
  const ctx = document.getElementById('opportunityTypesChart');
  if (!ctx) return;

  charts.opportunityTypes = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(data.unique_job_description_analysis.unique_job_description_types),
      datasets: [{
        data: Object.values(data.unique_job_description_analysis.unique_job_description_types),
        backgroundColor: neonColors.slice(0, Object.keys(data.unique_job_description_analysis.unique_job_description_types).length),
        borderWidth: 3,
        borderColor: '#000000',
        hoverBorderWidth: 5,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      ...darkChartOptions,
      plugins: {
        ...darkChartOptions.plugins,
        legend: {
          ...darkChartOptions.plugins.legend,
          position: 'bottom'
        },
        tooltip: {
          ...darkChartOptions.plugins.tooltip,
          callbacks: {
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${context.label}: ${context.parsed} job descriptions (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// Create job levels chart
function createJobLevelsChart() {
  const ctx = document.getElementById('jobLevelsChart');
  if (!ctx) return;

  charts.jobLevels = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(data.unique_job_description_analysis.job_level_distribution),
      datasets: [{
        data: Object.values(data.unique_job_description_analysis.job_level_distribution),
        backgroundColor: [neonColors[0], neonColors[1]],
        borderWidth: 3,
        borderColor: '#000000',
        hoverBorderWidth: 5,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      ...darkChartOptions,
      cutout: '60%',
      plugins: {
        ...darkChartOptions.plugins,
        legend: {
          ...darkChartOptions.plugins.legend,
          position: 'bottom'
        },
        tooltip: {
          ...darkChartOptions.plugins.tooltip,
          callbacks: {
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${context.label}: ${context.parsed} positions (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// Create salary chart
function createSalaryChart() {
  const ctx = document.getElementById('salaryChart');
  if (!ctx) return;

  charts.salary = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(data.unique_job_description_analysis.salary_range_distribution),
      datasets: [{
        data: Object.values(data.unique_job_description_analysis.salary_range_distribution),
        backgroundColor: neonColors.slice(0, Object.keys(data.unique_job_description_analysis.salary_range_distribution).length),
        borderWidth: 2,
        borderColor: '#000000',
        hoverBorderWidth: 3,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      ...darkChartOptions,
      plugins: {
        ...darkChartOptions.plugins,
        legend: {
          display: false
        },
        tooltip: {
          ...darkChartOptions.plugins.tooltip,
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.parsed.y} positions`;
            }
          }
        }
      },
      scales: {
        ...darkChartOptions.scales,
        y: {
          ...darkChartOptions.scales.y,
          beginAtZero: true,
          ticks: {
            ...darkChartOptions.scales.y.ticks,
            stepSize: 5
          }
        }
      }
    }
  });
}

// Create recruitment chart
function createRecruitmentChart() {
  const ctx = document.getElementById('recruitmentChart');
  if (!ctx) return;

  const organizations = Object.keys(data.recruitment_performance);
  const b15Data = organizations.map(org => data.recruitment_performance[org].B15);
  const b16Data = organizations.map(org => data.recruitment_performance[org].B16);

  charts.recruitment = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: organizations,
      datasets: [
        {
          label: 'B15 Recruits',
          data: b15Data,
          backgroundColor: neonColors[0],
          borderColor: '#000000',
          borderWidth: 2,
          hoverBorderWidth: 3,
          hoverBorderColor: '#ffffff'
        },
        {
          label: 'B16 Recruits',
          data: b16Data,
          backgroundColor: neonColors[1],
          borderColor: '#000000',
          borderWidth: 2,
          hoverBorderWidth: 3,
          hoverBorderColor: '#ffffff'
        }
      ]
    },
    options: {
      ...darkChartOptions,
      plugins: {
        ...darkChartOptions.plugins,
        legend: {
          ...darkChartOptions.plugins.legend,
          position: 'top'
        },
        tooltip: {
          ...darkChartOptions.plugins.tooltip,
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.parsed.y} recruits`;
            }
          }
        }
      },
      scales: {
        ...darkChartOptions.scales,
        y: {
          ...darkChartOptions.scales.y,
          beginAtZero: true,
          ticks: {
            ...darkChartOptions.scales.y.ticks,
            stepSize: 10
          }
        },
        x: {
          ...darkChartOptions.scales.x,
          ticks: {
            ...darkChartOptions.scales.x.ticks,
            maxRotation: 45
          }
        }
      }
    }
  });
}

// Render organizations list
function renderOrganizationsList() {
  const orgList = document.getElementById('orgList');
  if (!orgList) return;

  const allOrgs = [
    ...data.organization_lists.organizations_in_both_batches.map(org => ({name: org, batch: 'both'})),
    ...data.organization_lists.b15_only_organizations.map(org => ({name: org, batch: 'b15'})),
    ...data.organization_lists.b16_only_organizations.map(org => ({name: org, batch: 'b16'}))
  ].sort((a, b) => a.name.localeCompare(b.name));

  orgList.innerHTML = allOrgs.map(org => `
    <div class="org-item" data-batch="${org.batch}" data-name="${org.name.toLowerCase()}">
      <span class="org-name">${org.name}</span>
      <div class="org-batch">
        <span class="batch-tag ${org.batch}">${org.batch === 'both' ? 'B15 & B16' : org.batch.toUpperCase()}</span>
      </div>
    </div>
  `).join('');
}

// Filter organizations
function filterOrganizations() {
  const searchTerm = document.getElementById('orgSearch').value.toLowerCase();
  const batchFilter = document.getElementById('batchFilter').value;
  const orgItems = document.querySelectorAll('.org-item');

  orgItems.forEach(item => {
    const name = item.dataset.name;
    const batch = item.dataset.batch;
    
    const matchesSearch = name.includes(searchTerm);
    const matchesBatch = batchFilter === 'all' || batch === batchFilter;
    
    item.style.display = matchesSearch && matchesBatch ? 'flex' : 'none';
  });
}

// Populate state filter
function populateStateFilter() {
  const stateFilter = document.getElementById('stateFilter');
  if (!stateFilter) return;

  const states = Object.keys(data.geographic_analysis.state_wise_jd_coverage).sort();
  states.forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateFilter.appendChild(option);
  });
}

// Apply domain filter
function applyDomainFilter() {
  const selectedDomain = document.getElementById('domainFilter').value;
  console.log('Domain filter applied:', selectedDomain);
}

// Apply state filter
function applyStateFilter() {
  const selectedState = document.getElementById('stateFilter').value;
  console.log('State filter applied:', selectedState);
}

// Reset all filters
function resetAllFilters() {
  // Reset search
  const orgSearch = document.getElementById('orgSearch');
  if (orgSearch) orgSearch.value = '';

  // Reset batch filter
  const batchFilter = document.getElementById('batchFilter');
  if (batchFilter) batchFilter.value = 'all';

  // Reset domain filter
  const domainFilter = document.getElementById('domainFilter');
  if (domainFilter) domainFilter.value = 'all';

  // Reset state filter
  const stateFilter = document.getElementById('stateFilter');
  if (stateFilter) stateFilter.value = 'all';

  // Reapply filters
  filterOrganizations();
}

// Export dashboard data
function exportDashboardData() {
  const exportData = {
    summary: {
      totalB15: data.batch_analysis.b15_total,
      totalB16: data.batch_analysis.b16_total,
      bothBatches: data.batch_analysis.both_batches,
      uniqueOrganizations: data.batch_analysis.total_unique_organizations
    },
    domains: data.domain_analysis.working_domains,
    states: data.geographic_analysis.state_wise_jd_coverage,
    uniqueJobDescriptionTypes: data.unique_job_description_analysis.unique_job_description_types,
    jobLevels: data.unique_job_description_analysis.job_level_distribution,
    salaryRanges: data.unique_job_description_analysis.salary_range_distribution,
    recruitmentStats: data.recruitment_performance
  };

  const dataStr = JSON.stringify(exportData, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'b15-b16-dashboard-data.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}