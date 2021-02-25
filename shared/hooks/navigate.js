import LuigiClient from '@luigi-project/client';

function navigateToResourceDetails(resourceName) {
  LuigiClient.linkManager()
    .fromClosestContext()
    .navigate('/details/' + resourceName);
}

function navigateToNamespaceDetails(namespaceName) {
  LuigiClient.linkManager().navigate(
    `/home/namespaces/${namespaceName}/details`,
  );
  LuigiClient.sendCustomMessage({ id: 'console.refreshNavigation' });
}

export function navigateToDetails(resourceType, name) {
  switch (resourceType) {
    case 'namespaces':
      navigateToNamespaceDetails(name);
      break;
    default:
      navigateToResourceDetails(name);
  }
}

function navigateToResourceList() {
  LuigiClient.linkManager()
    .fromClosestContext()
    .navigate('/');
}

function navigateToNamespaceList() {
  LuigiClient.linkManager().navigate('/');
  LuigiClient.sendCustomMessage({ id: 'console.refreshNavigation' });
}

export function navigateToList(resourceType) {
  switch (resourceType) {
    case 'namespaces':
      navigateToNamespaceList();
      break;
    default:
      navigateToResourceList();
  }
}