// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Definitions } from '../../types';

export default {
  rpc: {
    name: {
      description: 'Retrieves the node name',
      params: [],
      type: 'Text'
    },
    version: {
      description: 'Retrieves the version of the node',
      params: [],
      type: 'Text'
    },
    chain: {
      description: 'Retrieves the chain',
      params: [],
      type: 'Text'
    },
    properties: {
      description: 'Get a custom set of properties as a JSON object, defined in the chain spec',
      params: [],
      type: 'ChainProperties'
    },
    health: {
      description: 'Return health status of the node',
      params: [],
      type: 'Health'
    },
    peers: {
      description: 'Returns the currently connected peers',
      params: [],
      type: 'Vec<PeerInfo>'
    },
    networkState: {
      description: 'Returns current state of the network',
      params: [],
      type: 'NetworkState'
    },
    addReservedPeer: {
      description: 'Adds a reserved peer',
      params: [
        {
          name: 'peer',
          type: 'Text'
        }
      ],
      type: 'Text'
    },
    removeReservedPeer: {
      description: 'Remove a reserved peer',
      params: [
        {
          name: 'peerId',
          type: 'Text'
        }
      ],
      type: 'Text'
    },
    nodeRoles: {
      description: 'Returns the roles the node is running as',
      params: [],
      type: 'Vec<NodeRole>'
    }
  },
  types: {
    AccountInfo: {
      nonce: 'Index',
      refcount: 'RefCount',
      data: 'AccountData'
    },
    DigestOf: 'Digest',
    DispatchError: {
      _enum: {
        Other: 'Null',
        CannotLookup: 'Null',
        BadOrigin: 'Null',
        Module: 'DispatchErrorModule'
      }
    },
    DispatchErrorModule: {
      index: 'u8',
      error: 'u8'
    },
    DispatchErrorTo198: {
      module: 'Option<u8>',
      error: 'u8'
    },
    DispatchResult: 'Result<(), DispatchError>',
    DispatchResultOf: 'DispatchResult',
    DispatchResultTo198: 'Result<(), Text>',
    Event: 'GenericEvent',
    EventId: '[u8; 2]',
    EventIndex: 'u32',
    EventRecord: {
      phase: 'Phase',
      event: 'Event',
      topics: 'Vec<Hash>'
    },
    EventRecordTo76: {
      phase: 'Phase',
      event: 'Event'
    },
    Key: 'Bytes',
    LastRuntimeUpgradeInfo: {
      specVersion: 'Compact<u32>',
      specName: 'Text'
    },
    NodeRole: {
      _enum: {
        Full: 'Null',
        LightClient: 'Null',
        Authority: 'Null',
        UnknownRole: 'u8'
      }
    },
    Phase: {
      _enum: {
        ApplyExtrinsic: 'u32',
        Finalization: 'Null',
        Initialization: 'Null'
      }
    },
    RefCount: 'u8'
  }
} as Definitions;
