// Mock data for Ryght Solutions healthcare application
const mockData = {
  // Users (Table 19)
  users: [
    {
      userid: 1,
      username: 'admin',
      fullname: 'Administrator',
      email: 'admin@ryghtsolutions.com',
      firstname: 'Admin',
      lastname: 'User',
      accesslevel: 'admin',
      active: 1
    },
    {
      userid: 2,
      username: 'therapist1',
      fullname: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@ryghtsolutions.com',
      firstname: 'Sarah',
      lastname: 'Johnson',
      accesslevel: 'therapist',
      active: 1
    },
    {
      userid: 3,
      username: 'therapist2',
      fullname: 'Dr. Michael Chen',
      email: 'michael.chen@ryghtsolutions.com',
      firstname: 'Michael',
      lastname: 'Chen',
      accesslevel: 'therapist',
      active: 1
    }
  ],

  // Patients (Table 20)
  patients: [
    {
      patientid: 1,
      pfirstname: 'John',
      plastname: 'Smith',
      statusid: 1,
      dob: '1985-03-15',
      gender: 'M',
      address: '123 Main St, Anytown, USA',
      phone: '555-0101',
      email: 'john.smith@email.com'
    },
    {
      patientid: 2,
      pfirstname: 'Maria',
      plastname: 'Garcia',
      statusid: 1,
      dob: '1992-07-22',
      gender: 'F',
      address: '456 Oak Ave, Somewhere, USA',
      phone: '555-0102',
      email: 'maria.garcia@email.com'
    },
    {
      patientid: 3,
      pfirstname: 'David',
      plastname: 'Wilson',
      statusid: 0,
      dob: '1978-11-08',
      gender: 'M',
      address: '789 Pine Rd, Elsewhere, USA',
      phone: '555-0103',
      email: 'david.wilson@email.com'
    }
  ],

  // Contacts (Table 23)
  contacts: [
    {
      contactid: 1,
      patientid: 1,
      contacttypeid: 23,
      name: 'Dr. Robert Brown',
      phone: '555-0201',
      email: 'dr.brown@clinic.com',
      relationship: 'Primary Care Physician'
    },
    {
      contactid: 2,
      patientid: 1,
      contacttypeid: 24,
      name: 'Dr. Lisa Davis',
      phone: '555-0202',
      email: 'dr.davis@pharmacy.com',
      relationship: 'Pharmacist'
    },
    {
      contactid: 3,
      patientid: 2,
      contacttypeid: 23,
      name: 'Dr. James Wilson',
      phone: '555-0203',
      email: 'dr.wilson@clinic.com',
      relationship: 'Primary Care Physician'
    }
  ],

  // Group Lists (Table 24)
  groupLists: [
    {
      grouplistid: 1,
      groupid: 1,
      isactive: 1,
      description: 'Depression Treatment Group',
      createdate: '2024-01-15'
    },
    {
      grouplistid: 2,
      groupid: 1,
      isactive: 1,
      description: 'Anxiety Management Group',
      createdate: '2024-01-20'
    },
    {
      grouplistid: 3,
      groupid: 2,
      isactive: 1,
      description: 'Trauma Recovery Group',
      createdate: '2024-02-01'
    }
  ],

  // Group Names (Table 25)
  groupNames: [
    {
      groupnameid: 1,
      isactive: 1,
      name: 'Mood Disorders',
      description: 'Treatment groups for depression and bipolar disorder'
    },
    {
      groupnameid: 2,
      isactive: 1,
      name: 'Anxiety Disorders',
      description: 'Treatment groups for various anxiety disorders'
    },
    {
      groupnameid: 3,
      isactive: 1,
      name: 'Trauma & PTSD',
      description: 'Specialized groups for trauma recovery'
    }
  ],

  // Services (Table 29)
  services: [
    {
      recid: 1,
      grouplistid: 1,
      isactive: 1,
      description: 'Individual Therapy Session',
      duration: 50,
      billingcode: '90837'
    },
    {
      recid: 2,
      grouplistid: 1,
      isactive: 1,
      description: 'Group Therapy Session',
      duration: 90,
      billingcode: '90853'
    },
    {
      recid: 3,
      grouplistid: 2,
      isactive: 1,
      description: 'Family Therapy Session',
      duration: 60,
      billingcode: '90847'
    }
  ],

  // Diagnosis (Table 30)
  diagnoses: [
    {
      recid: 1,
      statusid: 1,
      description: 'Major Depressive Disorder',
      icd10: 'F32.1',
      category: 'Mood Disorders'
    },
    {
      recid: 2,
      statusid: 1,
      description: 'Generalized Anxiety Disorder',
      icd10: 'F41.1',
      category: 'Anxiety Disorders'
    },
    {
      recid: 3,
      statusid: 1,
      description: 'Post-Traumatic Stress Disorder',
      icd10: 'F43.1',
      category: 'Trauma & Stress Disorders'
    }
  ],

  // Progress Notes (Table 16)
  progressNotes: [
    {
      recid: 1,
      patientid: 1,
      docid: 2,
      billingid: 1,
      content: 'Patient reported improved mood this week. Discussed coping strategies for work stress.',
      createdate: '2024-08-15',
      userid: 2
    },
    {
      recid: 2,
      patientid: 1,
      docid: 2,
      billingid: 2,
      content: 'Continued progress with depression symptoms. Patient engaged well in session.',
      createdate: '2024-08-08',
      userid: 2
    }
  ],

  // Treatment Plans (Table 16 with docid=1)
  treatmentPlans: [
    {
      recid: 1,
      patientid: 1,
      docid: 1,
      billingid: 1,
      content: 'Initial treatment plan for Major Depressive Disorder',
      createdate: '2024-08-01',
      userid: 2
    }
  ],

  // Goals (Table 18)
  goals: [
    {
      goalid: 1,
      patientid: 1,
      billingid: 1,
      isdeleted: 0,
      description: 'Reduce depressive symptoms by 50% within 3 months',
      targetdate: '2024-11-01',
      status: 'Active'
    },
    {
      goalid: 2,
      patientid: 1,
      billingid: 1,
      isdeleted: 0,
      description: 'Improve daily functioning and return to work',
      targetdate: '2024-10-01',
      status: 'Active'
    }
  ],

  // Objectives (Table 26)
  objectives: [
    {
      objectiveid: 1,
      goalid: 1,
      isdeleted: 0,
      description: 'Attend weekly therapy sessions',
      targetdate: '2024-09-01',
      status: 'Active'
    },
    {
      objectiveid: 2,
      goalid: 1,
      isdeleted: 0,
      description: 'Practice daily mood tracking',
      targetdate: '2024-08-15',
      status: 'Active'
    }
  ],

  // Interventions (Table 27)
  interventions: [
    {
      interventionid: 1,
      patientid: 1,
      objectiveid: 1,
      isdeleted: 0,
      description: 'Cognitive Behavioral Therapy techniques',
      frequency: 'Weekly',
      status: 'Active'
    },
    {
      interventionid: 2,
      patientid: 1,
      objectiveid: 2,
      isdeleted: 0,
      description: 'Mood monitoring and journaling',
      frequency: 'Daily',
      status: 'Active'
    }
  ],

  // Authorizations (Table 35)
  authorizations: [
    {
      authrecid: 1,
      patientid: 1,
      authnumber: 'AUTH001',
      startdate: '2024-08-01',
      enddate: '2024-12-31',
      sessions: 20,
      used: 5,
      status: 'Active'
    }
  ],

  // Authorization Details (Table 36)
  authDetails: [
    {
      recid: 1,
      authrecid: 1,
      servicetype: 'Individual Therapy',
      sessions: 20,
      used: 5,
      status: 'Active'
    }
  ]
};

module.exports = mockData;
