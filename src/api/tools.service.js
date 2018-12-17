import api from './../config/api';

class ToolsService {

    constructor() { }

    getTools() {
        return api.get('/api/tools')
            .then(res => res.data)
            .catch(err => Promise.reject(err));
    }

    filterTools(tools, nodeId) {
        return tools && tools
            .filter(t => t.keyID === nodeId);
    }
}

const toolsService = new ToolsService;

export default toolsService;