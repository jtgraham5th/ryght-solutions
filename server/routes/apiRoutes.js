const express = require('express');
const router = express.Router();
const mockData = require('../mockData.js');

// Helper function to filter data based on where clause
const filterData = (data, whereClause) => {
  if (!whereClause) return data;
  
  try {
    // Simple where clause parser for common patterns
    const conditions = whereClause.split(',');
    return data.filter(item => {
      return conditions.every(condition => {
        if (condition.includes('=')) {
          const [field, value] = condition.split('=');
          if (value === '1' || value === '0') {
            return item[field.trim()] === parseInt(value);
          }
          return item[field.trim()] == value.trim();
        }
        return true;
      });
    });
  } catch (error) {
    console.error('Error filtering data:', error);
    return data;
  }
};

// Generic list endpoint
router.get('/generic_api/list/:tableId', (req, res) => {
  try {
    const { tableId } = req.params;
    const { fields, where, orderby } = req.query;
    
    let data = [];
    
    // Map table IDs to mock data
    switch (tableId) {
      case '19': // Users
        data = mockData.users;
        break;
      case '20': // Patients
        data = mockData.patients;
        break;
      case '23': // Contacts
        data = mockData.contacts;
        break;
      case '24': // Group Lists
        data = mockData.groupLists;
        break;
      case '25': // Group Names
        data = mockData.groupNames;
        break;
      case '29': // Services
        data = mockData.services;
        break;
      case '30': // Diagnoses
        data = mockData.diagnoses;
        break;
      case '16': // Progress Notes & Treatment Plans
        if (req.query.docid === '2') {
          data = mockData.progressNotes;
        } else {
          data = mockData.treatmentPlans;
        }
        break;
      case '18': // Goals
        data = mockData.goals;
        break;
      case '26': // Objectives
        data = mockData.objectives;
        break;
      case '27': // Interventions
        data = mockData.interventions;
        break;
      case '35': // Authorizations
        data = mockData.authorizations;
        break;
      case '36': // Authorization Details
        data = mockData.authDetails;
        break;
      default:
        return res.status(404).json({ error: `Table ${tableId} not found` });
    }
    
    // Apply where clause filtering
    if (where) {
      data = filterData(data, where);
    }
    
    // Apply ordering
    if (orderby) {
      data.sort((a, b) => {
        const aVal = a[orderby] || '';
        const bVal = b[orderby] || '';
        return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      });
    }
    
    // Apply field selection
    if (fields && fields !== '*') {
      const fieldList = fields.split(',');
      data = data.map(item => {
        const filtered = {};
        fieldList.forEach(field => {
          if (item[field.trim()] !== undefined) {
            filtered[field.trim()] = item[field.trim()];
          }
        });
        return filtered;
      });
    }
    
    res.json(data);
  } catch (error) {
    console.error('Error in generic list endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Generic single record endpoint
router.get('/generic_api/:tableId', (req, res) => {
  try {
    const { tableId } = req.params;
    const { fields } = req.query;
    
    let data = [];
    
    // Map table IDs to mock data
    switch (tableId) {
      case '19': // Users
        data = mockData.users;
        break;
      case '20': // Patients
        data = mockData.patients;
        break;
      case '23': // Contacts
        data = mockData.contacts;
        break;
      case '24': // Group Lists
        data = mockData.groupLists;
        break;
      case '25': // Group Names
        data = mockData.groupNames;
        break;
      case '29': // Services
        data = mockData.services;
        break;
      case '30': // Diagnoses
        data = mockData.diagnoses;
        break;
      case '16': // Progress Notes & Treatment Plans
        data = [...mockData.progressNotes, ...mockData.treatmentPlans];
        break;
      case '18': // Goals
        data = mockData.goals;
        break;
      case '26': // Objectives
        data = mockData.objectives;
        break;
      case '27': // Interventions
        data = mockData.interventions;
        break;
      case '35': // Authorizations
        data = mockData.authorizations;
        break;
      case '36': // Authorization Details
        data = mockData.authDetails;
        break;
      default:
        return res.status(404).json({ error: `Table ${tableId} not found` });
    }
    
    // Apply field selection
    if (fields && fields !== '*') {
      const fieldList = fields.split(',');
      data = data.map(item => {
        const filtered = {};
        fieldList.forEach(field => {
          if (item[field.trim()] !== undefined) {
            filtered[field.trim()] = item[field.trim()];
          }
        });
        return filtered;
      });
    }
    
    res.json(data);
  } catch (error) {
    console.error('Error in generic single record endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Generic record by ID endpoint
router.get('/generic_api/:recordId', (req, res) => {
  try {
    const { recordId } = req.params;
    const { tid, fields } = req.query;
    
    let data = [];
    
    // Map table IDs to mock data
    switch (tid) {
      case '19': // Users
        data = mockData.users;
        break;
      case '20': // Patients
        data = mockData.patients;
        break;
      case '23': // Contacts
        data = mockData.contacts;
        break;
      case '24': // Group Lists
        data = mockData.groupLists;
        break;
      case '25': // Group Names
        data = mockData.groupNames;
        break;
      case '29': // Services
        data = mockData.services;
        break;
      case '30': // Diagnoses
        data = mockData.diagnoses;
        break;
      case '16': // Progress Notes & Treatment Plans
        data = [...mockData.progressNotes, ...mockData.treatmentPlans];
        break;
      case '18': // Goals
        data = mockData.goals;
        break;
      case '26': // Objectives
        data = mockData.objectives;
        break;
      case '27': // Interventions
        data = mockData.interventions;
        break;
      case '35': // Authorizations
        data = mockData.authorizations;
        break;
      case '36': // Authorization Details
        data = mockData.authDetails;
        break;
      default:
        return res.status(404).json({ error: `Table ${tid} not found` });
    }
    
    // Find specific record
    const record = data.find(item => {
      const idField = Object.keys(item).find(key => key.includes('id'));
      return idField && item[idField] == recordId;
    });
    
    if (!record) {
      return res.status(404).json({ error: 'Record not found' });
    }
    
    // Apply field selection
    if (fields && fields !== '*') {
      const fieldList = fields.split(',');
      const filtered = {};
      fieldList.forEach(field => {
        if (record[field.trim()] !== undefined) {
          filtered[field.trim()] = record[field.trim()];
        }
      });
      res.json(filtered);
    } else {
      res.json(record);
    }
  } catch (error) {
    console.error('Error in generic record by ID endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Generic POST endpoint for updates
router.post('/generic_api/:recordId', (req, res) => {
  try {
    const { recordId } = req.params;
    const { tid, fields } = req.query;
    const updateData = req.body;
    
    // In a real application, this would update the database
    // For now, we'll just return success
    console.log(`Update request for record ${recordId} in table ${tid}:`, updateData);
    
    res.json({ success: true, message: 'Record updated successfully' });
  } catch (error) {
    console.error('Error in generic POST endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Generic PUT endpoint for creating new records
router.put('/generic_api/:tableId', (req, res) => {
  try {
    const { tableId } = req.params;
    const { fields } = req.query;
    const newData = req.body;
    
    // In a real application, this would create a new record in the database
    // For now, we'll just return success with a mock ID
    console.log(`Create request for table ${tableId}:`, newData);
    
    const mockId = Math.floor(Math.random() * 10000) + 1000;
    res.json({ success: true, message: 'Record created successfully', id: mockId });
  } catch (error) {
    console.error('Error in generic PUT endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Generic DELETE endpoint
router.delete('/generic_api/delete/:tableId', (req, res) => {
  try {
    const { tableId } = req.params;
    const { primaryid, userid } = req.query;
    
    // In a real application, this would delete the record from the database
    // For now, we'll just return success
    console.log(`Delete request for record ${primaryid} in table ${tableId} by user ${userid}`);
    
    res.json({ success: true, message: 'Record deleted successfully' });
  } catch (error) {
    console.error('Error in generic DELETE endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Special endpoint for patient check (pcheck)
router.get('/generic_api/pcheck/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    
    // In a real application, this would validate the user
    // For now, we'll return a mock validation response
    const user = mockData.users.find(u => u.userid == userId);
    
    if (user) {
      res.json({ success: true, user: user });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error in pcheck endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
