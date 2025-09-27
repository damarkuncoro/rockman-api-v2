// Core entities with no dependencies
export * from "./departments";
export * from "./roles";
export * from "./feature_categories";
export * from "./products";
export * from "./memberships";
export * from "./outages";
export * from "./network_equipment";
export * from "./notifications";

// Entities that depend on the core ones above
export * from "./users"; // Depends on departments
export * from "./features"; // Depends on feature_categories

// Entities that depend on users and other core entities
export * from "./user_sessions"; // Depends on users
export * from "./user_addresses"; // Depends on users
export * from "./user_phones"; // Depends on users
export * from "./user_roles"; // Depends on users, roles
export * from "./user_devices"; // Depends on users
export * from "./user_products"; // Depends on users, products
export * from "./user_memberships"; // Depends on users, memberships
export * from "./user_identities"; // Depends on users
export * from "./customer_equipment"; // Depends on users, network_equipment
export * from "./loyalty_points"; // Depends on users
export * from "./tickets"; // Depends on users

// Entities with deeper dependencies
export * from "./transactions"; // Depends on users, user_products
export * from "./ticket_replies"; // Depends on users, tickets
export * from "./policies"; // Depends on features
export * from "./role_features"; // Depends on roles, features
export * from "./route_features"; // Depends on features
export * from "./access_logs"; // Depends on users, features
export * from "./change_history"; // Depends on users
export * from "./policy_violations"; // Depends on users, policies
export * from "./knowledge_base_articles";
export * from "./ticket_to_knowledge_base";